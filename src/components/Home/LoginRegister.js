import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginRegister.css";

const LoginRegister = () => {
  const [action, setAction] = useState("");
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    pass: "",
    cpass: "",
    rememberMe: false,
  });

<<<<<<< HEAD
  const navigate = useNavigate();
=======
    const [action, setAction] = useState('');
    const [formError, setFormError] = useState('');
    const [formData, setFormData] = useState({
        user: '',
        email: '',
        pass: '',
        cpass: '', 
        rememberMe: false
    });
    
    const navigate = useNavigate();
>>>>>>> 31ed15170d43a97f741caeb23ab3708561a971e9

  const registerLink = () => {
    setAction(" active");
    setFormError("");
  };

  const loginLink = () => {
    setAction("");
    setFormError("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9@_]{4,20}$/;
    return usernameRegex.test(username);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@!?\/_\-])[A-Za-z\d@!?\/_\-]{8,20}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { user, email, pass, cpass } = formData;

    if (!validateUsername(user)) {
      setFormError(
        "Username must be between 6 and 20 characters and may include letters, numbers, @, and _."
      );
      return;
    }

    if (!validateEmail(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(pass)) {
      setFormError(
        "Password must contain 8 to 20 characters and it should contain at least one uppercase letter, at least one lowercase letter, and at least one special character (@,!,?,/,_,-)."
      );
      return;
    }

    if (pass !== cpass) {
      setFormError("Password does not match!");
      return;
    }

    axios
      .post(
        "http://localhost/Project01/src/components/php/register.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          setFormError(response.data.error);
        } else {
          setFormError("");
          // Registration successful, clear form
          setFormData({
            user: "",
            email: "",
            pass: "",
            cpass: "",
          });
          alert("Registration successful!");
          navigate("/LoginRegister"); // Redirect to Login page
        }
<<<<<<< HEAD
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setFormError(
          "An error occurred during registration. Please try again."
        );
      });
  };
=======
    
        if (!validatePassword(pass)) {
            setFormError('Password must contain 8 to 20 characters and it should contain at least one uppercase letter, at least one lowercase letter, and at least one special character (@,!,?,/,_,-).');
            return;
        }
    
        if (pass !== cpass) {
            setFormError('Password does not match!');
            return;
        }
    
        axios.post('http://localhost/Project01/src/components/php/register.php', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.data.error) {
                    setFormError(response.data.error);
                } else {
                    setFormError('');
                    // Registration successful, clear form
                    setFormData({
                        user: '',
                        email: '',
                        pass: '',
                        cpass: '',
                        rememberMe: false
                    });
                    alert('Registration successful!');
                    navigate('/LoginRegister');  // Redirect to Login page
                    
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                setFormError('An error occurred during registration. Please try again.');
            });
    };
    
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const { user, pass, rememberMe } = formData;
>>>>>>> 31ed15170d43a97f741caeb23ab3708561a971e9

  const handleLogin = async (e) => {
    e.preventDefault();
    const { user, pass, rememberMe } = formData;

    if (!user || !pass) {
      setFormError("Username and Password are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost/Project01/src/components/php/login.php",
        { user, pass, rememberMe },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.error) {
        setFormError(response.data.error);
      } else {
        setFormError("");
        alert("Login successful!");
        navigate("/DashBoard");
      }
    } catch (error) {
      console.error("There was an error!", error);
      setFormError("An error occurred during login. Please try again.");
    }
  };
  //Go to Admin
  const gotoadmin = () => {
    navigate("/admin");
  };

  //Go to user
  const gotouser = () => {
    navigate("/User");
  };

  return (
    <div className="body">
      <div className={`wrapper1 ${action}`}>
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            {formError && <div className="form-error">{formError}</div>}
            <div className="input-box">
              <input
                type="text"
                name="user"
                placeholder="Username"
                value={formData.user}
                onChange={handleChange}
                required
              />
              <FaUser className="icon1" />
            </div>
<<<<<<< HEAD
            <div className="input-box">
              <input
                type="password"
                name="pass"
                placeholder="Password"
                value={formData.pass}
                onChange={handleChange}
                required
              />
              <FaLock className="icon1" />
=======

            <div className="form-box register">
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    {formError && <div className="form-error">{formError}</div>}
                    <div className="input-box">
                        <input type="text" name="user" placeholder='Username' value={formData.user} onChange={handleChange} required/>
                        <FaUser className="icon1" />
                    </div>
                    <div className="input-box">
                        <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required/>
                        <FaEnvelope className="icon1" />
                    </div>
                    <div className="input-box">
                        <input type="password" name="pass" placeholder='Password' value={formData.pass} onChange={handleChange} required/>
                        <FaLock className="icon1" />
                    </div>
                    <div className="input-box">
                        <input type="password" name="cpass" placeholder='Confirm Password' value={formData.cpass} onChange={handleChange} required/>
                        <FaLock className="icon1" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />I agree to the <b>Terms of Use & Privacy Policy</b>
                        </label>
                        
                    </div>

                    <button type="submit" name="submit" onClick={loginLink}>Register</button>

                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>
>>>>>>> 31ed15170d43a97f741caeb23ab3708561a971e9
            </div>
            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                Remember me
              </label>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="form-box register">
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
            {formError && <div className="form-error">{formError}</div>}
            <div className="input-box">
              <input
                type="text"
                name="user"
                placeholder="Username"
                value={formData.user}
                onChange={handleChange}
                required
              />
              <FaUser className="icon1" />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FaEnvelope className="icon1" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="pass"
                placeholder="Password"
                value={formData.pass}
                onChange={handleChange}
                required
              />
              <FaLock className="icon1" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="cpass"
                placeholder="Confirm Password"
                value={formData.cpass}
                onChange={handleChange}
                required
              />
              <FaLock className="icon1" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the{" "}
                <b>Terms of Use & Privacy Policy</b>
              </label>
            </div>
            <button type="submit" name="submit">
              Register
            </button>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div>
        <button onClick={gotoadmin}>Admin</button>
      </div>
      <div>
        <button onClick={gotouser}>User</button>
      </div>
    </div>
  );
};

export default LoginRegister;
