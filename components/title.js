export const Title = ({ content, size = 3 }) => (
  <div>
    <h1 className='title' style={{ fontSize: `${size}rem`}}>{content}</h1>
    <style jsx>{`
      .title {
        background: linear-gradient(-90deg, #D20B54 0%, #FFB849 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 4.5rem;
        font-family: brandon;
        font-weight: 600;
        color: #D20B54;
      }
    `}</style>
  </div>
)

export default Title
