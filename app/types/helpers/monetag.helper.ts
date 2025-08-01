export const openMonetagAd = (zoneId = '9304204'): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        reject('Not running in browser')
        return
      }
  
      const fnName = `show_${zoneId}`
  
      const waitForFn = () => {
        const fn = (window as any)[fnName]
        if (typeof fn === 'function') {
          fn()
            .then(() => resolve())
            .catch(() => reject())
        } else {
          setTimeout(waitForFn, 100)
        }
      }
  
      waitForFn()
    })
  }
  