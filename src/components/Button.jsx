import {PropTypes}  from "prop-types"
export const Button = ({loadMoreHandler}) => {
    return (
        <button type="button" className="Button" onClick={loadMoreHandler}>Load more</button>
    )
}

Button.propTypes = {
    loadMoreHandler:PropTypes.func.isRequired
}