const getAnimation = (index) => {
    return {
        initial: {
            opacity: 0,
            y: '-10px',
        },
        animate: {
            opacity: 1,
            y: '0px',
            transition: {
                delay: index * 0.250,
                duration: 0.5,
                type: 'spring'
            }
        }
    }
}

export {getAnimation};