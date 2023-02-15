import React , { useState , useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from './SignUp.module.css';

const SignUp = () => {

    const[data, setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    });
    const[errors, setErrors]=useState({});
    const[touched, setTouched]=useState({});

    useEffect(() => {
        setErrors(validate(data));
        console.log(errors);
    }, [data, touched])

    const changHandler = event => {
        if(event.target.name === "isAccepted"){
            setData({...data, [event.target.name]: event.target.checked})
        }
        else{
            setData({...data, [event.target.name]: event.target.value})
        }
        console.log(data)
    }
    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }
    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length)
        {
            notify("you signed up successfully", "success");
        }else
        {
            notify("invalid data", "error")
            setTouched({
            name: true,
            email: true,
            password: true,
            confirmPassword: true,
            isAccepted: true
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h1 className={styles.header}>Sign Up</h1>
                <div className={styles.formField}>
                    <label>name</label>
                    <input 
                    className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                    type="text" 
                    name="name" 
                    value={data.name} 
                    onChange={changHandler} 
                    onFocus={focusHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>email</label>
                    <input 
                    className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                    type="text" 
                    name="email" 
                    value={data.email} 
                    onChange={changHandler} 
                    onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>password</label>
                    <input 
                    className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                    type="password" 
                    name="password" 
                    value={data.password} 
                    onChange={changHandler} 
                    onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>confirm password</label>
                    <input 
                    className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
                    type="password" 
                    name="confirmPassword" 
                    value={data.confirmPassword} 
                    onChange={changHandler} 
                    onFocus={focusHandler}/>
                     {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkboxContainer}>
                    <label>I accept terms of privacy of policy</label>
                    <input 
                    type="checkbox" 
                    name="isAccepted" 
                    value={data.isAccepted} 
                    onChange={changHandler} 
                    onFocus={focusHandler}/>
                    </div>
                     {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons}>
                    <a href="#">Login</a>
                    <button type="submit">submit</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;