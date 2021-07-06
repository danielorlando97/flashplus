export interface IMapper<Entity, Model> {
    getModel(entity : Entity) : Model
}