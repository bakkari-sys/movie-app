import React from "react";

const Login = () => (<div className="login-wrap">
	<div className="login-html">
		
			<div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>>
				</div>
				
				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>
				<div className="hr"></div>
				
			</div>
		</div>
	</div>

)

export default Login