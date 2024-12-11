"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {!user ? (
                <div>
                    <h1>Welcome to the Shopping List App</h1>
                    <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
                        Login with GitHub
                    </button>
                </div>
            ) : (
                <div>
                    <h1>Welcome, {user.displayName || "User"}!</h1>
                    <p>{user.email}</p>
                    <button onClick={handleLogout} style={{ padding: "10px 20px", fontSize: "16px" }}>
                        Logout
                    </button>
                    <br />
                    <br />
                    <Link href="/week-10/shopping-list">
                        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
                            Go to Shopping List
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
