type MyUnion1 = string | number | boolean

type Random1 = Extract<MyUnion1, boolean>;