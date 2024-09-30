import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <ul className="menu">
          <li className='flex gap-2 text-[15px] mt-1'>
            <a href="#directions">Направления</a>
            <span className="py-1.5">
              <svg width="5" height="12" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5.99997C5 6.13947 4.95927 6.27911 4.87792 6.38561L2.79459 9.11288L0.711272 11.8401C0.548461 12.0533 0.284816 12.0533 0.122109 11.8401C-0.0405988 11.627 -0.040703 11.2819 0.122109 11.0689L3.99417 5.99998L0.122108 0.931072C-0.0407034 0.717937 -0.0407034 0.3728 0.122108 0.159801C0.28492 -0.0531998 0.548564 -0.0533362 0.711272 0.1598L4.87792 5.61434C4.95927 5.72084 5 5.86047 5 5.99997Z" fill="white"/>
              </svg>
            </span>
          </li>
          <li className='abel'><a href="#portfolio">Портфолио</a></li>
          <li className='abel'><a href="#contacts">Контакты</a></li>
        </ul>
        <div>
          <button>Войти</button>
          <button className='registration'>Регистрация</button>
        </div>
      </nav>

      <div className="headerGradient">
        <div className='gradientPic'>
             <div className='title'><a href='#'><h1>почему мы не используем <br />coreldraw</h1></a>
        </div> 

        </div>
        <div className="headerImg"></div>
      </div>
    </div>
  );
}
