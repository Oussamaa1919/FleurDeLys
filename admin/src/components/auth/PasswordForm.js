import React from 'react'

const PasswordForm = () => {
  return (
    <section className="login-container">
    <h2 className="large text-login">Password</h2>
    <p className="lead">
      <i className="fas fa-user" /> Change Your password
    </p>
    <form className="form" >
      <div className="form-group">
        <input
          type="password"
          placeholder="Current Password"
          name="currentPassword"
          
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="New Password"
          name="newPassword"
          
          minLength="6"
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm New Password"
          name="confirmNewPassword"
         
          minLength="6"
        />
      </div>
      <input type="submit" className="btn btn-login" value="changer votre mdp" />
    </form>
  </section>
  )
}

export default PasswordForm
