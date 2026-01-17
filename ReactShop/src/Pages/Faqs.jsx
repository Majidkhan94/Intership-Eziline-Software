export let Faqs = () =>{
    
    let Data = [
        {Title       : "How do I create an account?",
         Description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et,
                        veritatis dolorum quo in molestias! Nobis corrupti, adipisci veritatis
                        quis magni voluptatem blanditiis earum rerum officiis corporis quae inventore 
                        ut fugit veniam unde itaque enim maxime, doloremque iusto animi explicabo iste, 
                        minus laboriosam! Dolor, voluptatibus sint. Non mollitia asperiores quam.`   
        },
        {Title       : "Is my information secure?",
         Description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et,
                        veritatis dolorum quo in molestias! Nobis corrupti, adipisci veritatis
                        quis magni voluptatem blanditiis earum rerum officiis corporis quae inventore 
                        ut fugit veniam unde itaque enim maxime, doloremque iusto animi explicabo iste, 
                        minus laboriosam! Dolor, voluptatibus sint. Non mollitia asperiores quam.`   
        }, 
        {Title       : "Is the service free or paid?",
         Description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et,
                        veritatis dolorum quo in molestias! Nobis corrupti, adipisci veritatis
                        quis magni voluptatem blanditiis earum rerum officiis corporis quae inventore 
                        ut fugit veniam unde itaque enim maxime, doloremque iusto animi explicabo iste, 
                        minus laboriosam! Dolor, voluptatibus sint. Non mollitia asperiores quam.`   
        },
        {Title       : "How can I delete my account?",
         Description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et,
                        veritatis dolorum quo in molestias! Nobis corrupti, adipisci veritatis
                        quis magni voluptatem blanditiis earum rerum officiis corporis quae inventore 
                        ut fugit veniam unde itaque enim maxime, doloremque iusto animi explicabo iste, 
                        minus laboriosam! Dolor, voluptatibus sint. Non mollitia asperiores quam.`   
        },
        {Title       : "How do I contact support?",
         Description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et,
                        veritatis dolorum quo in molestias! Nobis corrupti, adipisci veritatis
                        quis magni voluptatem blanditiis earum rerum officiis corporis quae inventore 
                        ut fugit veniam unde itaque enim maxime, doloremque iusto animi explicabo iste, 
                        minus laboriosam! Dolor, voluptatibus sint. Non mollitia asperiores quam.`   
        }
    ]
    
    return(<>
    
        <div className="p-5 md:p-15">
            {Data.map((item,idx)=>{
                return(
                <div key={idx}>
                    <h1 className="text-center text-2xl pb-5 md:text-left">{item.Title}</h1>
                    <p className="text-center text-sm pb-5 md:text-left">{item.Description}</p>
                </div>)
            })}
        </div>



    </>)}

    