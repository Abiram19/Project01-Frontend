<?php
session_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

include('db_connect.php');

$data = json_decode(file_get_contents("php://input"), true);
$user = $data['user'];
$pass = $data['pass'];
$rememberMe = isset($data['rememberMe']) ? $data['rememberMe'] : false;

if (empty($user) || empty($pass)) {
    echo json_encode(['error' => 'Username and Password are required.']);
    exit;
}

$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
if ($stmt === false) {
    echo json_encode(['error' => 'Database error: failed to prepare statement']);
    exit();
}

$stmt->bind_param("s", $user);
$stmt->execute();
$result = $stmt->get_result();

// Check if user exists
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($pass, $row['password'])) {
        $_SESSION['user'] = $user;

        if ($rememberMe) {
            $cookieParams = session_get_cookie_params();
            setcookie(session_name(), session_id(), time() + 3600 * 24 * 3, $cookieParams['path'], $cookieParams['domain'], $cookieParams['secure'], $cookieParams['httponly']);
        }
        echo json_encode(['success' => 'Login successful']);
    } else {
        echo json_encode(['error' => 'Invalid username or password']);
    }
} else {
    echo json_encode(['error' => 'Invalid username or password']);
}

$stmt->close();
$conn->close();
?>
