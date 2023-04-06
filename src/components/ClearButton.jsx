import './ClearButton.scss';

export const ClearButton = (props) => {
    return(
        <div className='clear' onClick={() => props.handleClear()}>
            Clear
        </div>
    )
}  