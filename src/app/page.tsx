'use client'
import React, {useEffect, useState} from 'react';
import Stars from './stars'
export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailCorrect, setEmailCorrect] = useState(false)
    const [passwordHasDigit, setPasswordHasDigit] = useState(false)
    const [passwordIsLong, setPasswordIsLong] = useState(false)
    const [passwordHasCharacters, setPasswordHasCharacters] = useState(false)
    const [passwordHasBlurred, setPasswordHasBlurred] = useState(false)

    function togglePwd() {
        const input = document.getElementById('password');
        if (input) {
            const type =
                input.getAttribute('type') ===
                'password' ? 'text' : 'password';
            input.setAttribute('type', type);
        }
    }

    function validateEmail() {
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const correct = email.match(emailRegex)
        if (correct) {
            setEmailCorrect(true);
        } else {
            setEmailCorrect(false);
        }
    }


    function liveValidatePassword(password: string) {
        if (password.length === 0)
            setPasswordHasBlurred(false)
        const isLong = password.length > 7
        if (isLong) {
            setPasswordIsLong(true);
        } else {
            setPasswordIsLong(false);
        }
        const hasDigits = password.match(/\d+/)
        if (hasDigits) {
            setPasswordHasDigit(true);
        } else {
            setPasswordHasDigit(false);
        }
    }

    function lateValidatePassword() {
        const hasCharacters = password.match(/[a-z]+[A-Z]+|[A-Z]+[a-z]+/)
        const hasWhitespace = password.match(/\s/)
        if (hasCharacters && !hasWhitespace) {
            setPasswordHasCharacters(true);
        } else {
            setPasswordHasCharacters(false);
        }
        setPasswordHasBlurred(true)
    }

    useEffect(() => liveValidatePassword(password), [password])

    return (
        <div className="mt-10 text-center">
            <Stars />
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-[28px]/[28px]  font-bold text-[#4A4E71]">Sign up</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" autoComplete="email" required
                                       placeholder={"Email"}
                                       onBlur={validateEmail}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className={(email ? emailCorrect ? "validationSuccessfull " : "validationFailed " : "defaultInput ") +
                                           `block w-full rounded-md
                                           bg-white px-3 py-1.5 text-base
                                           text-gray-900 outline outline-2 -outline-offset-1 outline-[#151D5133]
                                           placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                                           focus:outline-black sm:text-sm/6`}/>
                            </div>
                        </div>

                        <div>
                            <div className="mt-2 relative">
                                <input type="password" name="password" id="password"
                                       placeholder={"Create your password"}
                                       required
                                       onBlur={lateValidatePassword}
                                       onChange={(e) => {
                                           setPassword(e.target.value);
                                       }}
                                       className={(password ? passwordIsLong && passwordHasDigit && passwordHasCharacters ? "validationSuccessfull " : "validationFailed " : "defaultInput ") + `block w-full rounded-md bg-white px-3 py-1.5 text-base
                                       text-gray-900 outline outline-2 -outline-offset-1 outline-[#151D5133]
                                       placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 
                                           focus:focus:outline-black sm:text-sm/6`}
                                />
                                <button type="button" onClick={togglePwd}
                                        className="text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 absolute right-0.5 top-0.5 h-8 w-8">
                                    <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <path className="hs-password-active:hidden"
                                              d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                        <path className="hs-password-active:hidden"
                                              d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                        <path className="hs-password-active:hidden"
                                              d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                        <line className="hs-password-active:hidden" x1="2" x2="22" y1="2"
                                              y2="22"></line>
                                        <path className="hidden hs-password-active:block"
                                              d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                        <circle className="hidden hs-password-active:block" cx="12" cy="12"
                                                r="3"></circle>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ol className="text-[#4A4E71] text-[13px]">
                            <ul className={(password ? passwordIsLong ? "validationTipSuccessfull" : "validationTipFailed" : "validationTipDefault") + " mb-2"}>
                                8 characters or more (no spaces)
                            </ul>
                            <ul className={(password && passwordHasBlurred ? passwordHasCharacters ? "validationTipSuccessfull" : "validationTipFailed" : "validationTipDefault") + " mb-2"}>
                                Uppercase and lowercase letters
                            </ul>
                            <ul className={(password ? passwordHasDigit ? "validationTipSuccessfull" : "validationTipFailed" : "validationTipDefault") + " mb-2"}>
                                At least one digit
                            </ul>
                        </ol>
                        <div className='flex-col justify-center'>
                            <button type="submit"
                                    className="justify-center rounded-full
                                     bg-gradient-to-br from-[#70C3FF] to-[#4B65FF] px-3 py-1.5
                                     w-[240px]
                                     h-[48]
                                     text-[16px]/[14px] font-bold text-white
                                     text-center
                                     shadow-sm hover:bg-indigo-500
                                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offs  et-2
                                     focus-visible:outline-indigo-600">Sign
                                up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
