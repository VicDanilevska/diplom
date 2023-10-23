import React from 'react';

const LogIn = () => {
    return (
        <motion.section
            initial={{x: '100%'}}
            animate={{x: 0, transition: {duration: 0.5}}}
            exit={{x: '-100%', transition: {duration: 0.5}}}
            className={'flex flex-col justify-center items-center h-screen w-full overflow-x-hidden'}>

            <div className={''}>
                <form action="" className={''}>
                    <div className={''}>
                        <label htmlFor="" className={''}>

                        </label>
                        <input type="text" className={''}/>
                    </div>
                    <div className={''}>
                        <label htmlFor="" className={''}>

                        </label>
                        <input type="text" className={''}/>

                    </div>
                    <div className={''}>
                        <button className={''}>

                            <div className="">

                            </div>
                        </button>
                        <Link className="">

                        </Link>

                    </div>
                </form>

            </div>

            
        </motion.section>
    );
};

export default LogIn;