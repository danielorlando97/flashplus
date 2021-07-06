export interface IUseCase<Req, Rep>{
    execute(req: Req) : Promise<Rep>
}