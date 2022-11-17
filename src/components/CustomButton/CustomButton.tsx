import { FC } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@mui/styles'

import Button, { ButtonProps } from '@mui/material/Button'

import styles from 'assets/jss/buttonStyles'

const useStyles = makeStyles(styles)

interface Props extends ButtonProps {
  btnColor: 'dark' | 'green'
}

const CustomButton: FC<Props> = (props) => {
  const { children, btnColor, ...otherProps } = props

  const classes = useStyles()

  const classnames = clsx(classes.btn, {
    [classes.dark]: btnColor === 'dark',
    [classes.green]: btnColor === 'green',
  })

  return (
    <Button {...otherProps} className={classnames}>
      {children}
    </Button>
  )
}

export default CustomButton
