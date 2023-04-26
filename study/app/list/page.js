/** Image Razie 등 최적화용 */
import Image from "next/image"
import Img_Test from '/public/test.png'

export default function List(){
    let Products = ['Prod1','Prod2','상품1','상품2']
    let Converted = Products.map((data, index) => {
        //console.log(index)
        //console.log(data)

        return 'none'
    })

    //console.log(Products)
    //console.log(Converted)

    return (
        <div>
            <h2 className="red center">상품목록</h2>          
            {
                Products.map( (ProductData, index) => {
                    return (
                        /** key 유니크값 사용  **/
                        /** 외부링크시 width, height 속성 필수 , next.config.js 에 선언 필수 **/
                        <div className="food" key={ index }>
                            <img src={ '/test' + index + '.png' } alt="공사중" className="img-size"/>
                            <img src={ `/test${index}.png` } alt="공사중" className="img-size"/>
                            <Image src={ Img_Test } className="img-size"/>
                            <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" width={100} height={100} className="img-size"/>
                            <p>{ ProductData }</p>
                        </div>  
                    )
                })
            }
        </div>
    )
}