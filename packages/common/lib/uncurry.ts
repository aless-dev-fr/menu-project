
type TCurryFunction<T> = (...arguments_: any[]) => T

type TCurryFunctionsObject<T> = {
  [K in keyof T]: TCurryFunction<T[K]>
}

export function uncurry<T>(functionsObject: TCurryFunctionsObject<T>, ...arguments_: any[]): T {
    const keys = Object.keys(functionsObject)
    const results: any = {}
  
    for (const key of keys) {
      const function_ = (functionsObject as Record<string, any>)[key]
  
      results[key] = function_(...arguments_)
    }
  
    return results as T
}