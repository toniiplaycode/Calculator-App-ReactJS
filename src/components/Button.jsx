import './Button.scss'; 

const isOperator = (value) => {
    return !isNaN(value) || value === '.' || value === '='; // nếu đúng là số hoặc dấu chấm hoặc dấu bằng thì trả về true. hàm này để xác định các toán tử để CSS
}

export const Button = (props) => {
    console.log(isNaN(123))
    return(
        <div 
            className={`btn-wrapper ${isOperator(props.children) ? null : 'operator'}`}
            onClick={() => props.handleClick(props.children)}
        >
            {props.children}
        </div>
    )
}
