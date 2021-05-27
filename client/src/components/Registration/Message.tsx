import React from "react";
import PropTypes from "prop-types";

interface Props {
    msg: string;
}

const Message: React.FC<Props> = ({ msg }) => {
    return (
        <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
        >
            {msg}
        </div>
    );
};

Message.propTypes = {
    msg: PropTypes.string.isRequired,
};

export default Message;
