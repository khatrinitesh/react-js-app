import React from 'react'

const SocialLoginFormApp = () => {

    const handleSocialLogin = (provider) => {
        console.log(`Logging in ${provider}`)
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white p-8 shadow-md rounded-md w-96">
                    <h2 className="text-2xl font-semibold mb-6">Social Login</h2>

                    <button
                        onClick={() => handleSocialLogin('Google')}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full mb-4"
                    >
                        Sign in with Google
                    </button>

                    <button
                        onClick={() => handleSocialLogin('GitHub')}
                        className="bg-gray-800 text-white py-2 px-4 rounded-md w-full"
                    >
                        Sign in with GitHub
                    </button>
                </div>
            </div>
        </>
    )
}

export default SocialLoginFormApp
