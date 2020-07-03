import Link from 'next/link'

const Card = ({dataCard}) =>  (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-6">
        <Link href="/photo/[slug]" as={'/photo/' + dataCard.id}>
            <img className="w-full cursor-pointer" src={dataCard.urls.regular} alt={dataCard.alt_description}/>
        </Link>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{dataCard.alt_description}</div>
        </div>
        <div className="px-6 pb-4 flex items-center justify-between">
          <div className="text-md mb-2"> Date: <br/>{new Date(dataCard.created_at).toLocaleDateString()}</div>
        
          <div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <i className="fa fa-2x fa-thumbs-up animate__animated animate__bounce " style={{color: "#4ea4ef"}}></i>
              &nbsp;{dataCard.likes}
            </span>
          </div>
        </div>

        <div className="px-6 py-4 flex justify-center">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={dataCard.user.profile_image.medium} alt="Avatar of Jonathan Reinink"/>
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{dataCard.user.name}</p>
              <p className="text-gray-600">{dataCard.user.username}</p>
            </div>
          </div>
        </div>
    </div>
)

export default Card
