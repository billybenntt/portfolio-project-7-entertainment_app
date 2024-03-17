


function Loading(props: { center: boolean }) {

    const {center} = props
    const isCenter = center ? 'loading loading-center' : 'loading'

    return (
        <div className={isCenter}>
        </div>
    )
}

export default Loading
