
export function extend (...args) {
  for (let i = 1; i < arguments.length; i++)
    for (let key in arguments[i])
      if (arguments[i].hasOwnProperty(key))
        arguments[0][key] = arguments[i][key];
  return arguments[0];
}
