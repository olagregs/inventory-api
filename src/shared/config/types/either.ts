type Either<Fail, Success> = { ok: false; value: Fail } | { ok: true; value: Success };

const fail = <F, S>(value: F): Either<F, S> => ({ ok: false, value });
const success = <F, S>(value: S): Either<F, S> => ({ ok: true, value });

export { Either, fail, success };
