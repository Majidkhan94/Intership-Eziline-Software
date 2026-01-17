export let Privacypolicy = () =>{
    
    let Data = [
        {Title       : "Information We Collect",
         Description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et,
                        veritatis dolorum quo in molestias! Nobis corrupti, adipisci veritatis
                        quis magni voluptatem blanditiis earum rerum officiis corporis quae inventore 
                        ut fugit veniam unde itaque enim maxime, doloremque iusto animi explicabo iste, 
                        minus laboriosam! Dolor, voluptatibus sint. Non mollitia asperiores quam.`   
        },
        {Title       : "How We Use Your Information",
         Description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et,
                        veritatis dolorum quo in molestias! Nobis corrupti, adipisci veritatis
                        quis magni voluptatem blanditiis earum rerum officiis corporis quae inventore 
                        ut fugit veniam unde itaque enim maxime, doloremque iusto animi explicabo iste, 
                        minus laboriosam! Dolor, voluptatibus sint. Non mollitia asperiores quam.`   
        }, 
        {Title       : "Data Security",
         Description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et,
                        veritatis dolorum quo in molestias! Nobis corrupti, adipisci veritatis
                        quis magni voluptatem blanditiis earum rerum officiis corporis quae inventore 
                        ut fugit veniam unde itaque enim maxime, doloremque iusto animi explicabo iste, 
                        minus laboriosam! Dolor, voluptatibus sint. Non mollitia asperiores quam.`   
        },
        {Title       : "Third-Party Disclosure",
         Description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et,
                        veritatis dolorum quo in molestias! Nobis corrupti, adipisci veritatis
                        quis magni voluptatem blanditiis earum rerum officiis corporis quae inventore 
                        ut fugit veniam unde itaque enim maxime, doloremque iusto animi explicabo iste, 
                        minus laboriosam! Dolor, voluptatibus sint. Non mollitia asperiores quam.`   
        },
        {Title       : "Your Choices",
         Description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et,
                        veritatis dolorum quo in molestias! Nobis corrupti, adipisci veritatis
                        quis magni voluptatem blanditiis earum rerum officiis corporis quae inventore 
                        ut fugit veniam unde itaque enim maxime, doloremque iusto animi explicabo iste, 
                        minus laboriosam! Dolor, voluptatibus sint. Non mollitia asperiores quam.`   
        },
        {Title       : "Children’s Privacy",
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

    