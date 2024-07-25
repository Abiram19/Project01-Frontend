<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

include 'db_connect.php';

$response = array();
$data = json_decode(file_get_contents("php://input"));

if (isset($data->user) && isset($data->email) && isset($data->pass) && isset($data->cpass)) {

    $user = $data->user;
    $email = $data->email;
    $pass = $data->pass;
    $cpass = $data->cpass;

    if (!preg_match("/^[a-zA-Z0-9@_]{4,20}$/", $user)) {
        $response['error'] = 'Username must be between 4 and 20 characters and may include letters, numbers, @, and _.';
        echo json_encode($response);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['error'] = 'Invalid email format.';
        echo json_encode($response);
        exit();
    }

    if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@!?\/\-_])[A-Za-z\d@!?\/\-_]{8,20}$/", $pass)) {
        $response['error'] = 'Password must contain 8 to 20 characters and it should contain at least one uppercase letter, at least one lowercase letter, and at least one special character (@,!,?,/,_,-).';
        echo json_encode($response);
        exit();
    }

    if ($pass !== $cpass) {
        $response['error'] = 'Passwords do not match.';
        echo json_encode($response);
        exit();
    }

    $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

    // Check if email already exists
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        $response['error'] = 'Email already registered.';
        echo json_encode($response);
        $stmt->close();
        exit();
    }

    // Check if username already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->bind_param("s", $user);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        $response['error'] = 'Username already taken.';
        echo json_encode($response);
        $stmt->close();
        exit();
    }

    // Insert user data into database
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $user, $email, $hashed_password);
    if ($stmt->execute()) {
        $response['success'] = 'User registered successfully.';
    } else {
        $response['error'] = 'Registration failed. Please try again.';
    }
    echo json_encode($response);
    $stmt->close();
    $conn->close();
} else {
    $response['error'] = 'Please fill all the fields.';
    echo json_encode($response);
}

?>
