import React from 'react';
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link';

export default ({href, ...props}) => {
    return (
        <RouterLink to={props.href}>
            <Link {...props}/>
        </RouterLink>
    )
}