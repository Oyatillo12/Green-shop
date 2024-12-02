import React from 'react'
import './style.css'

const Menubtn: React.FC<{ extraStyle?: string }> = ({ extraStyle }) => {
    return (
        <div className={`hamburger-lines ${extraStyle} sm:hidden`}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
    )
}

export default Menubtn
