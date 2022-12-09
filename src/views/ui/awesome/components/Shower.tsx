import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}

function Wrapper() {
  return (
    <div className="bg-[#000] w-full h-full overflow-hidden">
      <p className="t-shower select-none">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil voluptatum aperiam maiores ex necessitatibus officiis possimus repellat illo ducimus beatae sit tenetur iste mollitia asperiores provident voluptatem, quo suscipit unde.
        Voluptatem quisquam fugit similique tempora hic eligendi dolorum consequatur ab debitis. Doloribus voluptate repudiandae voluptates! Consequuntur itaque veniam quae ab aperiam id neque, aut, voluptate sapiente nesciunt nihil dolor ipsum.
        Necessitatibus sit deserunt nostrum facilis expedita quam perferendis fugiat maxime officia mollitia voluptate incidunt corporis totam a in explicabo sint, commodi minima. Quasi ea tenetur laboriosam atque sunt omnis possimus?
      </p>
    </div>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })