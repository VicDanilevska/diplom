import React from 'react';

const LogIn = () => {
    return (
        <motion.section
            initial={{x: '100%'}}
            animate={{x: 0, transition: {duration: 0.5}}}
            exit={{x: '-100%', transition: {duration: 0.5}}}
            className={'flex flex-col justify-center items-center h-screen w-full overflow-x-hidden'}>

            <div className={'w-2/6'}>
                <form className={'bg-white shadow-md rounded px-8 pt-6 pb-8'}>
                    <div className={'mb-4'}>
                        <label htmlFor="Email" className={'block text-gray-700 text-4xl font-bold mb-2'}>
                            Логін
                        </label>
                        <input type="text" id={'Email'} placeholder={'Email'}
                               className={'shadow border text-3xl rounded w-full py-2 px-3 text-gray-700'}/>
                    </div>
                    <div className={'mb-6'}>
                        <label htmlFor="Password" className={'block text-gray-700 text-4xl font-bold mb-2'}>

                        </label>
                        <input type="password" id={'Password'}
                               className={'shadow border rounded w-full py-2 px-3 text-3xl text-gray-700 mb-3'}
                               placeholder="Пароль"/>
                    </div>
                    <div className={'flex items-center justify-between'}>
                        <button
                            className={'relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
                            type={'button'}>
                            Увійти
                            <div className={'bg-white absolute w-full h-full left-0 top-0 pointer-events-none'}>

                            </div>
                        </button>
                        <Link
                            className={'relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:-bottom-1 before:left-0 before:bg-black before:transition-all before:duration-500 hover:before:w-full hover:scale-110'}>
                            Ще не маєте аккаунту ?
                        </Link>

                    </div>
                </form>

            </div>


        </motion.section>
    );
};

export default LogIn;