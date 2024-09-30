import React from 'react'
import Asaid from './Asaid'
import Adobe from './Adobe'
import { imagesAi, booklets } from '../constant/const';
import Animation from './Animation';




export default function Main() {

  return (
    <div className='main'>
      <main className='mainContent'>
        <div className='flex'>
          <div className='flex flex-col gap-[60px]'>
            <div className='firstP'>
              В мире дизайна мы сделали выбор в пользу Adobe, оставив за бортом формат CorelDraw. Давайте разберем, почему именно Adobe стал нашим надежным союзником в творчестве.
            </div>
            <div className='flex gap-[42px]'>
              <div className='number'><svg width="57" height="130" viewBox="0 0 57 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.574 130V29.533L6.248 35.023L0.392 11.965L37.175 0.984992H56.39V130H28.574Z" fill="url(#paint0_linear_1_18)" />
                <defs>
                  <linearGradient id="paint0_linear_1_18" x1="10.1375" y1="7.60682" x2="50.6757" y2="131.578" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A2645" />
                    <stop offset="0.670466" stop-color="#291725" />
                    <stop offset="0.989129" stop-color="#171422" />
                  </linearGradient>
                </defs>
              </svg>
              </div>
              <div className='flex flex-col gap-[60px]'>
                <p className='secondP'>Adobe - это компания, представляющая широкий спектр продуктов, среди которых вы, вероятно, знакомы с основными: </p>
                <Adobe />
                <div className='flex text-white	justify-end	text-[18px] mr-10 mb-10'><a href="#"><p>а также более 90 других продуктов</p></a></div>

              </div>

            </div>
            <p className='secondP'>
              Более тысячи специалистов по всему миру активно участвуют в разработке и обеспечивают высокое качество продуктов и их разнообразные возможности.
              <br />  <br />В то время как CorelDraw ограничивается только CorelDraw.
            </p>
            <div className='flex gap-[42px] mt-[60px]'>
              <div className='number'><svg width="96" height="130" viewBox="0 0 96 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.967 130V107.674L43.606 72.721C52.024 65.767 57.819 60.216 60.991 56.068C64.163 51.798 65.749 47.101 65.749 41.977C65.749 36.731 64.163 32.644 60.991 29.716C57.819 26.788 53.671 25.324 48.547 25.324C43.789 25.324 39.458 26.666 35.554 29.35C31.772 31.912 27.38 36.304 22.378 42.526L2.614 26.605C9.324 17.455 16.217 10.745 23.293 6.475C30.491 2.20499 39.519 0.069993 50.377 0.069993C63.675 0.069993 74.35 3.72999 82.402 11.05C90.454 18.248 94.48 27.886 94.48 39.964C94.48 46.918 93.138 53.201 90.454 58.813C87.77 64.303 84.293 69.183 80.023 73.453C75.753 77.601 69.348 82.969 60.808 89.557L39.946 105.661H95.761V130H0.967Z" fill="url(#paint0_linear_1_22)" />
                <defs>
                  <linearGradient id="paint0_linear_1_22" x1="12.8438" y1="7.60682" x2="41.8523" y2="138.4" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A2645" />
                    <stop offset="0.670466" stop-color="#291725" />
                    <stop offset="0.989129" stop-color="#171422" />
                  </linearGradient>
                </defs>
              </svg>
              </div>
              <div className='flex flex-col gap-[60px]'>
                <p className='secondP'>Поддержка CorelDraw практически отсутствует в Европе и США, поскольку более 98% типографий в этих регионах не используют данный формат. </p>
              </div>
            </div>

            <div className='flex gap-[42px] mt-[60px]'>
              <div className='number'><svg width="98" height="132" viewBox="0 0 98 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.913 131.196C30.051 131.196 13.398 123.815 0.954 109.053L20.352 90.57C29.502 100.818 39.811 105.942 51.279 105.942C56.647 105.942 60.978 104.539 64.272 101.733C67.688 98.805 69.396 94.901 69.396 90.021C69.396 84.775 67.2 80.749 62.808 77.943C58.416 75.137 52.255 73.734 44.325 73.734H32.613L28.221 55.8L58.782 25.056H8.457V0.899991H95.016V22.128L62.625 53.055C85.561 56.959 97.029 69.037 97.029 89.289C97.029 101.611 92.82 111.676 84.402 119.484C76.106 127.292 64.943 131.196 50.913 131.196Z" fill="url(#paint0_linear_1_19)" />
                <defs>
                  <linearGradient id="paint0_linear_1_19" x1="14.6625" y1="6.60682" x2="43.9013" y2="137.292" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A2645" />
                    <stop offset="0.670466" stop-color="#291725" />
                    <stop offset="0.989129" stop-color="#171422" />
                  </linearGradient>
                </defs>
              </svg>

              </div>
              <div className='flex flex-col gap-[60px]'>
                <p className='secondP'>Главный недостаток CorelDraw заключается в преобразовании документа во внутренний формат bitmap. Это особенно заметно при обработке растровых изображений, где могут возникнуть различные артефакты, такие как неожиданные грани, изменение цветов или полная инверсия изображения. </p>
              </div>
            </div>

            <div className='error'>

              <img className="errorImg1" src="https://s3-alpha-sig.figma.com/img/ac09/2ea4/36ee019f97f8fcd3a8c2bc7ca9cced6e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTPzV7GDZgJWdfDjH1eyRsTVzLRfSOwXBKkSIgUHVoFWrk5mnY5DpAerF9KC0fqTH58xjMEM2W7kF2qmWuKyGMFhmn9yoYIAGVCene00a3TuLSl2Mvif6-Utimwqy2jq4b4Y99pGdzUoAN9xQ-Ev2fiyq1zNrL41G5NIofdYopjm3bQaw~MmD14c1iwTKKisFLX--CHzZ9Mw9vzHxOB6p6oZ05RTliZXwd1m6P59-3kWsGesFD4jVIqFmCnurJVOde1J4ra3rMkqopZFeGlWG~lsuP5bGD1diMU2yrI9DhQQhhgEK6JKuX-mGbyTAY55xiR8LqJaAz-pyyx4GWX4eQ__" alt="error" />
              <img className="errorImg2" src="https://s3-alpha-sig.figma.com/img/d60b/d902/ced0d5cb100347e25f83869f8b117df4?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oA1Ntx6KrnqS5n1LhMfXJwPRtThjJKBOQPsJMso8VK~C2oRslQWeRH-t8-3k0bo36-Bb1Ll8GthEYiYN9cGm-zydGcTmgUrWsB8uf2xQrb0TtG5i6bEk1wR~P11pa-Vf8FkZbCVtgrBOyEnliy01e3QCK5guipc-rkCy9Q4~J~s1EtU4xB~ryxRa1Rjps11f5fp~TYWLJa7DHT6kM7QweW11MI3AXMyf5GrP~JxXrl6JoCpTOHZCiLoNQP~Fsk4jEAdH~hwO34BA3F68OpxxhLlzIGn~RfZvqrSHx1lfzhbWOP4RvwBp5Qt~Ieg5h-JzOXc5qFSYzq~cdt-etAdI~g__" alt="" />
            </div>

            <p className='thirdP'>В отличие от этого, Illustrator лишен подобных неожиданностей и обладает полной совместимостью с форматами PDF и EPS, необходимыми для полиграфии. Важно отметить, что, несмотря на возможность сохранения файлов в формате PDF, CorelDraw плохо распознает PDF файлы, что может привести к потере некоторых элементов макета. Поэтому при подготовке макета для офсетной полиграфии Illustrator остается оптимальным выбором.</p>

            <div className='ai'>
              <div className='aiCircle'>
                <img src={imagesAi[0].src} alt={imagesAi[0].alt} />
              </div>
              <div><svg width="137" height="46" viewBox="0 0 137 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.997898 43.4371C2.10383 42.3862 3.19883 41.3465 4.30477 40.2956C4.37713 39.95 4.55001 39.6361 4.87983 39.4086C5.47352 38.9992 6.01148 38.5796 6.56072 38.1709L13.9192 31.1873C15.2223 29.9555 17.0734 31.7712 15.9166 33.123C14.8145 34.4183 13.6444 35.6258 12.4509 36.767C52.8159 22.708 93.7044 10.1412 135.407 0.617642C136.05 0.474191 136.32 1.43679 135.679 1.60247C92.2144 12.9207 49.1394 25.6664 7.09101 41.5077C6.7079 41.8804 6.30257 42.2535 5.91946 42.6263C9.57013 42.2689 13.2208 41.9115 16.8827 41.565C18.6806 41.4034 18.6907 44.1705 16.9264 44.3426C11.9668 44.854 7.00644 45.3209 2.0352 45.799C0.825712 45.9181 0.154421 44.2171 0.99754 43.4149L0.997898 43.4371Z" fill="white" />
              </svg>
              </div>
              <div className='aiCircle relative' style={{ top: '-64px' }}>
                <img src={imagesAi[1].src} alt={imagesAi[1].alt} />
              </div>
              <div><svg width="137" height="46" viewBox="0 0 137 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M135.947 43.4371C134.841 42.3862 133.746 41.3465 132.64 40.2956C132.568 39.95 132.395 39.6361 132.065 39.4086C131.471 38.9992 130.933 38.5796 130.384 38.1709L123.026 31.1873C121.723 29.9555 119.871 31.7712 121.028 33.123C122.13 34.4183 123.3 35.6258 124.494 36.767C84.1289 22.708 43.2405 10.1412 1.53736 0.617642C0.895045 0.474191 0.624319 1.43679 1.26629 1.60247C44.7304 12.9207 87.8054 25.6664 129.854 41.5077C130.237 41.8804 130.642 42.2535 131.025 42.6263C127.375 42.2689 123.724 41.9115 120.062 41.565C118.264 41.4034 118.254 44.1705 120.018 44.3426C124.978 44.854 129.938 45.3209 134.91 45.799C136.119 45.9181 136.79 44.2171 135.947 43.4149L135.947 43.4371Z" fill="white" />
              </svg>
              </div>
              <div className='aiCircle'>
                <img src={imagesAi[2].src} alt={imagesAi[2].alt} />
              </div>
            </div>

            <div className='booklets'>
              <img className='bookletsImg relative' src={booklets[0].src} alt={booklets[0].alt} />
              <img className='bookletsImg relative' style={{ marginLeft: "10px" }} src={booklets[1].src} alt={booklets[1].alt} />
              <img className='bookletsImg relative' style={{ marginLeft: "10px" }} src={booklets[2].src} alt={booklets[2].alt} />
              <img className='bookletsImg relative' style={{ marginLeft: "166px" }} src={booklets[3].src} alt={booklets[3].alt} />
            </div>

            <div className='flex gap-[42px] mt-[60px]'>
              <div className='number'><svg width="112" height="130" viewBox="0 0 112 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.834 130V102.367H5.248L0.673 82.42L70.945 0.984992H94.735V79.492H111.937V102.367H94.735V130H67.834ZM33.796 79.492H67.834V39.598L33.796 79.492Z" fill="url(#paint0_linear_1_20)" />
                <defs>
                  <linearGradient id="paint0_linear_1_20" x1="18.0188" y1="7.60682" x2="44.5099" y2="139.513" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A2645" />
                    <stop offset="0.670466" stop-color="#291725" />
                    <stop offset="0.989129" stop-color="#171422" />
                  </linearGradient>
                </defs>
              </svg>


              </div>
              <div className='flex flex-col gap-[60px]'>
                <p className='secondP'>Современная лицензия CorelDraw может оцениваться в 600 долларов в год на одного пользователя, что может быть финансово недоступным для многих типографий. Из-за этого они вынуждены использовать устаревшие версии программы, что может привести к искаженному отображению контента. </p>
              </div>
            </div>

            <div className='flex gap-[42px] mt-[60px]'>
              <div className='number'><svg width="98" height="132" viewBox="0 0 98 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.815 131.196C30.271 131.196 14.289 124.791 0.869 111.981L17.888 91.668C28.136 100.94 38.323 105.576 48.449 105.576C55.159 105.576 60.405 103.99 64.187 100.818C67.969 97.646 69.86 93.193 69.86 87.459C69.86 82.091 67.786 77.882 63.638 74.832C59.49 71.66 54 70.074 47.168 70.074C40.336 70.074 33.199 71.66 25.757 74.832L9.47 64.035L13.13 0.899991H91.82V25.605H37.286L35.822 47.748C41.678 46.284 47.29 45.552 52.658 45.552C65.956 45.552 76.753 48.968 85.049 55.8C93.345 62.632 97.493 73.002 97.493 86.91C97.493 100.452 93.04 111.249 84.134 119.301C75.35 127.231 63.577 131.196 48.815 131.196Z" fill="url(#paint0_linear_1_21)" />
                <defs>
                  <linearGradient id="paint0_linear_1_21" x1="14.025" y1="6.60682" x2="42.8066" y2="137.505" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A2645" />
                    <stop offset="0.670466" stop-color="#291725" />
                    <stop offset="0.989129" stop-color="#171422" />
                  </linearGradient>
                </defs>
              </svg>


              </div>
              <div className='flex flex-col gap-[60px]'>
                <p className='secondP'>Обучение наших дизайнеров работе в CorelDraw требовало бы значительного времени. Учитывая, что это формат с тенденцией к упадку, вкладывание человеческого капитала в него становится неоправданно. </p>
              </div>
            </div>


          </div>
          <Asaid />

        </div>

      </main>
      <Animation />

    </div>
  )
}
