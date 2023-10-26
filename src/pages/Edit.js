import React from 'react';

const Edit = () => {
    return <motion.div
        exit={{x: '-100%', transition: {duration: 0.5}}}
        className={`flex flex-row justify-end relative`}>

        <motion.div className={''}>

            <div className={''}>
                <div className={''}>
                    <h1 className={''}>Додайте або змініть назву</h1>
                    <input type="text"
                           className={''}
                    />
                </div>

                <div className={''}>
                    <h1 className={''}>Додайте або змініть логотип</h1>
                    <div className={''}>
                        <h1 className={''}>Старий логотип</h1>
                        <img alt="" className={''}/>
                    </div>
                    <div className={''}>
                            <h1 className={''}>Новий логотип</h1>
                            <img  alt="" className={''}/>
                        <div className={""}>
                            <div className="">
                                <span className={''}>Оберіть або  перетягніть логотип сюди</span>
                                <input type="file" accept={'image/png, image/jpeg'} hidden/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className={''}>

                <div className={''}>
                    <div className="">
                        <span className={''}>Оберіть або  перетягніть фотографію сюди</span>
                        <input multiple={true} type="file" accept={'image/png, image/jpeg'} hidden/>
                    </div>
                </div>
            </div>

            <div className={''}>

                <h1>Instagram</h1>
                <div className={''}>
                    <input type="text" className={''}/>
                </div>

                <h1>Twitter</h1>
                <div className={''}>
                    <input type="text" className={''}/>
                </div>

                <h1>Facebook</h1>
                <div className={''}>
                    <input type="text" className={''}/>
                </div>

                <h1>Telegram</h1>
                <div className={''}>
                    <input type="text" className={''}/>
                </div>

            </div>

        </motion.div>
        <div className={''}>

            <div className={''}>
                <button className={''}>
                    Зберегти зміни
                </button>
                <Link
                    className={''}
                    to={`/users/${user.uid}`}>
                    Повернутись
                </Link>
            </div>

            <motion.div className={''}>
                <h1 className={''}>Додайте або змініть повний опис</h1>
                <h2 className={''}>Підтримується MD-формат</h2>
                <textarea className={''}/>
            </motion.div>

            <motion.div className={''}>
                <h1 className={'='}>Додайте або змініть короткий опис</h1>
                <h2 className={'='}>Підтримується MD-формат</h2>
                <textarea className={''}/>
            </motion.div>


            <motion.div className={''}>
                <h1 className={''}>Додайте або змініть послуги</h1>
                <div className={''}>
                    <div className={''}>

                    </div>
                </div>
            </motion.div>

        </div>

    </motion.div>
};

export default Edit;