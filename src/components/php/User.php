<?php
class User {
    private $conn;
    private $table_name = "users";

    public $username;
    public $email;
    public $password;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function register() {
        $query = "INSERT INTO " . $this->table_name . " (username, email, password) VALUES (?, ?, ?)";
        
        $stmt = $this->conn->prepare($query);
        if ($stmt === false) {
            return ['error' => 'Database error: failed to prepare statement'];
        }

        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = password_hash($this->password, PASSWORD_DEFAULT);

        $stmt->bind_param("sss", $this->username, $this->email, $this->password);

        if ($stmt->execute()) {
            return ['success' => 'User registered successfully.'];
        } else {
            return ['error' => 'Registration failed. Please try again.'];
        }
    }
}
?>
