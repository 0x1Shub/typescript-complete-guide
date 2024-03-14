type MyUnion = string | number | boolean

type Random = Exclude<MyUnion, boolean>;