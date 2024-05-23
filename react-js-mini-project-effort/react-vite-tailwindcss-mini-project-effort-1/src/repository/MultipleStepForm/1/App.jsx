import React, { useState } from 'react'

const MultipleStepFormApp = () => {
    return (
        <>
            <MultipleStepForm />
        </>
    )
}

export default MultipleStepFormApp

const MultipleStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', formData)
    }

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1)
    }
    const handlePrev = () => {
        setStep((prevStep) => prevStep - 1)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <>
                        <label>
                            First Name:
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        </label>
                        <label>
                            First Name:
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </label>
                    </>
                )}
                {step === 2 && (
                    <>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>
                    </>
                )}
                <div>
                    {step > 1 && <button type="button" onClick={handlePrev}>Prev</button>}
                    {step < 2 ? (
                        <button type="button" onClick={handleNext}>Next</button>
                    ) : (
                        <button type="button" onClick={handleSubmit}>Submit</button>
                    )}
                </div>
            </form>
        </>
    )
}
