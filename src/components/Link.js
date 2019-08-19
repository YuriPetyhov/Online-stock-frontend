import React from 'react'
import Link from '@material-ui/core/Link'
import {Link as RouterLink} from 'react-router-dom'

export default ({href, ...props}) =>
    <Link
        component={(props) => <RouterLink to={href} {...props}/>}
        {...props}
    />
