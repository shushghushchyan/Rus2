import React from 'react'

export default function Asaid() {
    let array = [
        {
          img: "https://s3-alpha-sig.figma.com/img/ca6f/a705/4e5c15ba203d173dda684e08217a74d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WUrrQ02vUO3DQk64rN-poJpdHRfHjD~n~~f2nP75cT9pvtAwLdYlrV2PxuKZ~zCFaKT5PhcUgT8DNkI2PXd19L5yxiwbTHfXZFzmDjDuiUxkpLhY3Cl3L~SciphhukIY7ireC02yadEuHPuijdmNynTXL~fuyEibrplyzDPCBCeO0kaYKOfdYTayEfmhfTBO1CWTqTPtVwHuuInvV2bM4q3UG~RQcteG3vEImTQ8f9glMfCkM5qhqyZ61eD0QlNBmdgokLWgxlTGr0COa8AhDjb-YvcLs8f~Ip37s3DaDsjMbOV3ovNmIoL4pwId~uKCZ298kdMAhspd-K-8N40jPg__",
          description1: "почему мы не используем ",
          description2:"CorelDraw"
        },
        {
          img: "https://s3-alpha-sig.figma.com/img/1a25/8fe9/fb00ef7bbbc40db7d121cbc26391d8f3?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZjzcLh9-fa4Q3GyM04uow55zl8R~r12I~~xPfxWvhJ8vBUOifEdJ6OwKfvBuAhzvLsDdsoOJbiG1-JEzaz7pVCy6tnGq2OXweJb19DSeifyf94JxfyCJs4ty3NyaRcHtT4EgqSHhnbwNrtw0Fh1plozmcPU7uQEGOV6K6UJxIi4bptIS2x0CRFsalPhK2TDhiCAx9k1GEmyWGVhjdq8Gh29dO3MROf-70~J1ZP5-TA9VD5YkUljCpEl0Ug8CJHT5en0rHyV4QgIZ6V5o-c~bZEnfgw211JWVe1Ad5n-a8P92eLpKwz~LdTWyhtplj-l1XmeSBJqoZPiGbrKmsfu9Q__",
          description1: "в команде Creat работают",
          description2:"только лучшие"

        },
        {
          img: "https://s3-alpha-sig.figma.com/img/61b4/b957/ddad9815e1e38f6042605ef812ec6645?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NpHHGgUVEe3YSwJ2GjFB6vfuPDlYlEICVzzAv5YV-0k1lsz73-cNOYuo3ZRZY6WXEaOmV5Y6BZjxS7y3KtfGHm7gcqANXGZra6aj-wEl00kbRAnL2-VwKo2xWcE0VJUiHs6m4QWjhrxst-G8FIXeF9f0XGyCJFKBZivu8dPvT3Cc1-TZrKXfdpBNBCILQ6Fk7OArOYJ6NdGi4C5iPqm92P9xvIfBl9oqVU2ZKUk02JxkwdqKwzcUOm49FR2NfopNhs0zUBv-KMdDeWAe80j550xnADngkRoM9ycp6bAV6-i8sC4G7-A227aRDi42sa2BD3x5udWgPiu86dZl0oYkww__",
          description1: "откуда мы черпаем идеи ",
          description2:"для дизайна"

        },
        {
          img: "https://s3-alpha-sig.figma.com/img/1a25/8fe9/fb00ef7bbbc40db7d121cbc26391d8f3?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZjzcLh9-fa4Q3GyM04uow55zl8R~r12I~~xPfxWvhJ8vBUOifEdJ6OwKfvBuAhzvLsDdsoOJbiG1-JEzaz7pVCy6tnGq2OXweJb19DSeifyf94JxfyCJs4ty3NyaRcHtT4EgqSHhnbwNrtw0Fh1plozmcPU7uQEGOV6K6UJxIi4bptIS2x0CRFsalPhK2TDhiCAx9k1GEmyWGVhjdq8Gh29dO3MROf-70~J1ZP5-TA9VD5YkUljCpEl0Ug8CJHT5en0rHyV4QgIZ6V5o-c~bZEnfgw211JWVe1Ad5n-a8P92eLpKwz~LdTWyhtplj-l1XmeSBJqoZPiGbrKmsfu9Q__",
          description1: "в команде Creat работают",
          description2:"только лучшие"
        }]
  return (
    <div>
       <aside className='aside'>
        {
          array.map((el) => {
            return (
              <div className='image-container'>
                <img src={el.img}></img>
                <div className='descriptionAndCircle'>
                 <div className='flex flex-col justify-center items-center p-3	'>
                    <p className='text-[10px] w-[148px] h-[13px]'> {el.description1}</p>
                 <p className='text-[16px]'>{el.description2}</p></div> <button  className='circle'>
                    <svg className="arrow" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44049 2.48309C1.17635 2.48309 0.962217 2.69722 0.962217 2.96136C0.962217 3.22551 1.17635 3.43964 1.44049 3.43964L1.44049 2.48309ZM16.7448 2.96136L11.9621 0.200051V5.72268L16.7448 2.96136ZM1.44049 3.43964L12.4404 3.43964V2.48309L1.44049 2.48309L1.44049 3.43964Z" fill="white" />
                    </svg>
                    </button></div>
                  </div>
            )
          })
        }
      </aside>
    </div>
  )
}
