/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, {
  useState,
  useEffect,
} from 'react'

const IconSpan = props =>
  <span
    {...props}
    css={{
      width: '50%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  />

export const Thumb = props =>
  <div
    {...props}
    css={{
      width: 24,
      height: 24,
      borderRadius: 99999,
      bg: 'white',
      border: '1px solid',
    }}
  />

export const Switch = ({
  checked,
  label,
  icons,
  thumb,
  className,
  ...props
}) =>
  <button
    {...props}
    type='button'
    role='switch'
    aria-checked={checked}
    aria-label={label}
    className={[
      className,
      checked ? 'active' : ''
    ].join(' ')}
    css={{
      appearance: 'none',
      color: 'primary',
      bg: checked ? 'primary': 'muted',
      p: 0,
      m: 0,
      display: 'inline-flex',
      alignItems: 'center',
      width: 48,
      height: 24,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      borderRadius: 99999,
      border: 0,
      position: 'relative',
      ':focus': {
        outline: 'none',
        div: {
          boxShadow: '0 0 4px 1px',
        }
      }
    }}>
    {icons && (
      <IconSpan>
        {icons.checked}
      </IconSpan>
    )}
    {icons && (
      <IconSpan>
        {icons.unchecked}
      </IconSpan>
    )}
    {React.cloneElement(thumb, {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        transitionProperty: 'transform',
        transitionDuration: '0.1s',
        transitionTimingFunction: 'ease-out',
        transform: checked ? `translateX(100%)` : `translateX(0)`
      }
    })}
  </button>

Switch.defaultProps = {
  label: 'Toggle',
  icons: false,
  thumb: <Thumb />,
}

export default Switch
