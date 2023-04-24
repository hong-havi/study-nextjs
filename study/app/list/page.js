export default function List(){
    let Products = ['Prod1','Prod2','상품1','상품2']
    let Converted = Products.map((data, index) => {
        console.log(index)
        console.log(data)

        return 'none'
    })

    console.log(Products)
    console.log(Converted)

    return (
        <div>
            <h2 className="red center">상품목록</h2>          
            {
                Products.map( (ProductData, index) => {
                    return (
                        <div className="food">
                            <p>{ ProductData }</p>
                        </div>  
                    )
                })
            }
        </div>
    )
}