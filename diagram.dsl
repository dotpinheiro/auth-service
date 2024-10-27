
classDiagram

class ConfigEntity{
            -_sessionValidationType: "jwt"
-_database: AvailableDatabases
-_port: number
-_host: string
            
        }
class AuthorizationRepository{
            
            +create() Promise~AuthorizationEntity~
+delete() Promise~boolean~
+findAll() Promise~AuthorizationEntity[]~
+findOne() Promise~AuthorizationEntity~
+findOneByUuid() Promise~AuthorizationEntity~
+update() Promise~AuthorizationEntity~
+findPermissionsByUserUuid() Promise~AuthorizationEntity~
-_findRbacPermissionsByUserUuid() Promise~RbacEntity~$
-_findAbacPermissionsByUserUuid() Promise~AbacEntity~$
        }
AuthorizationRepositoryInterface<|..AuthorizationRepository
class DatabaseHandler{
            -_handler: DatabaseInterface
            
        }
class DatabaseHandlers {
        <<enumeration>>
        SQLITE
POSTGRES
      }
class DatabaseInterface {
            <<interface>>
            
            +init() Sequelize
        }
class UserRepository{
            
            +create() Promise~UserEntity~
+delete() Promise~boolean~
+findAll() Promise~UserEntity[]~
+findOne() Promise~UserEntity~
+findOneByUuid() Promise~UserEntity~
+findByEmailOrFail() Promise~UserEntity~
+findByUsernameOrFail() Promise~UserEntity~
+update() Promise~UserEntity~
        }
UserRepositoryInterface<|..UserRepository
class BaseEntity{
            #_createdAt: Date
#_updatedAt: Date
#_deletedAt: Date
#_isActive: boolean
            
        }
class BaseRepositoryInterface~T~ {
            <<interface>>
            +create: (entity: T) =~ Promise~T~
+update: (entity: T) =~ Promise~T~
+delete: (entity: T) =~ Promise~boolean~
+findOne: (entity: T) =~ Promise~T~
+findOneByUuid: (uuid: string) =~ Promise~T~
+findAll: () =~ Promise~T[]~
            
        }
class AuthenticationEntity{
            -_user: UserEntity
-_session: Session
            
        }
class AuthenticationEntityConstructor {
            <<interface>>
            +user: UserEntity
            
        }
class Session {
            <<interface>>
            +token: string
            
        }
class AuthenticationService{
            -_userService: UserService
            +authenticate() Promise~AuthenticationEntity~
        }
class AuthorizationEntity{
            -_rbac: RbacEntity
-_abac: AbacEntity
            
        }
class AuthorizationTypes {
            <<interface>>
            +rbac: RbacEntity
+abac?: AbacEntity
            
        }
class AuthorizationRepositoryInterface {
            <<interface>>
            
            +findPermissionsByUserUuid() Promise~AuthorizationEntity~
        }
BaseRepositoryInterface~T~<|..AuthorizationRepositoryInterface
class AuthorizationService{
            -_authorizationRepository: AuthorizationRepository
            +checkPermission() Promise~boolean~
+checkPolicy() Promise~boolean~
        }
class UserEntity{
            -_uuid: string
-_name: string
-_username: string
-_email: string
-_password: string
-_authorization: AuthorizationEntity
            +create() Promise~this~
+from() UserEntity$
-validate() void
+checkPassword() Promise~boolean~
+hashPassword() Promise~void~
        }
class UserEntityErrors {
        <<enumeration>>
        INVALID_EMAIL
INVALID_USERNAME
INVALID_PASSWORD
      }
BaseEntity<|--UserEntity
class UserRepositoryInterface {
            <<interface>>
            +findByEmailOrFail: (email: string) =~ Promise~UserEntity~
+findByUsernameOrFail: (username: string) =~ Promise~UserEntity~
            
        }
BaseRepositoryInterface~T~<|..UserRepositoryInterface
class UserService{
            -_userRepository: UserRepository
-_authorizationRepository: AuthorizationRepository
            +createUser() Promise~UserEntity~
+findUserWithPermissions() Promise~UserEntity~
+findUserByEmail() Promise~UserEntity~
+findUserByUsername() Promise~UserEntity~
+findAll() Promise~UserEntity[]~
        }
class Postgres{
            -instance: Sequelize$
            +getInstance() Sequelize$
+init() Sequelize
        }
DatabaseInterface<|..Postgres
class Sqlite{
            -instance: Sequelize$
            +getInstance() Sequelize$
+init() Sequelize
        }
DatabaseInterface<|..Sqlite
class AbacEntity{
            -_policies: AccessPolicyEntity[]
            +checkPolicy() boolean
+from() AbacEntity$
        }
BaseEntity<|--AbacEntity
class AccessPolicyEntity{
            -_actions: ActionEntity[]
-_userAttributes: AttributeEntity[]
-_resourceAttributes: AttributeEntity[]
            +checkPolicy() boolean
+from() AccessPolicyEntity$
        }
class ActionEntity{
            -_name: string
            +from() ActionEntity$
        }
class AttributeEntity{
            -_name: string
-_value: string
            +from() AttributeEntity$
        }
class ResourceEntity{
            -_name: string
            
        }
class PermissionEntity{
            -_id: number
-_name: string
            +from() PermissionEntity$
        }
class PermissionParams {
            <<interface>>
            +id: number
+name: string
            
        }
BaseEntity<|--PermissionEntity
class RbacEntity{
            -_roles: RoleEntity[]
            +from() RbacEntity$
+checkPermission() boolean
        }
class RbacParams {
            <<interface>>
            +roles: RoleEntity[]
            
        }
BaseEntity<|--RbacEntity
class RoleEntity{
            -_id: number
-_name: string
-_permissions: PermissionEntity[]
            +from() RoleEntity$
        }
class RoleParams {
            <<interface>>
            +id: number
+name: string
+permissions: PermissionEntity[]
            
        }
BaseEntity<|--RoleEntity
class UserModel{
            +uuid: string
+name: string
+username: string
+email: string
+password: string
+isActive: boolean
+createdAt: Date
+updatedAt: Date
            +toEntity() UserEntity$
        }
Model~TModelAttributes,TCreationAttributes~<|--UserModel
class AbacModel{
            +id: number
+userUuid: string
+accessPolicyId: number
+policies: AbacAccessPolicyModel[]
+createdAt: Date
+updatedAt: Date
+toEntity: (model: AbacModel) =~ AbacEntity$
            
        }
Model~TModelAttributes,TCreationAttributes~<|--AbacModel
class AbacAccessPolicyModel{
            +id: number
+userAttributeName: string
+resourceAttributeName: string
+actionName: string
+actions: AbacActionModel[]
+resourceAttributes: AbacResourceAttributeModel[]
+userAttributes: AbacUserAttributeModel[]
+createdAt: Date
+updatedAt: Date
+toEntity: (model: AbacAccessPolicyModel) =~ AccessPolicyEntity$
            
        }
Model~TModelAttributes,TCreationAttributes~<|--AbacAccessPolicyModel
class AbacActionModel{
            +name: string
+description: string
+createdAt: Date
+updatedAt: Date
            
        }
Model~TModelAttributes,TCreationAttributes~<|--AbacActionModel
class AbacResourceModel{
            +id: string
+name: string
+description: string
+isActive: boolean
+createdAt: Date
+updatedAt: Date
+attributes: AbacResourceAttributeModel[]
            
        }
Model~TModelAttributes,TCreationAttributes~<|--AbacResourceModel
class AbacResourceAttributeModel{
            +name: string
+resourceId: number
+description: string
+isActive: boolean
+createdAt: Date
+updatedAt: Date
            
        }
Model~TModelAttributes,TCreationAttributes~<|--AbacResourceAttributeModel
class AbacUserAttributeModel{
            +name: string
+description: string
+isActive: boolean
+createdAt: Date
+updatedAt: Date
            
        }
Model~TModelAttributes,TCreationAttributes~<|--AbacUserAttributeModel
class RbacModel{
            +id: number
+name: string
+description: string
+isActive: boolean
+createdAt: Date
+updatedAt: Date
+userUuid: string
+rbacRoleId: number
+roles: RbacRoleModel[]
            +toEntity() RbacEntity$
        }
Model~TModelAttributes,TCreationAttributes~<|--RbacModel
class RbacPermissionModel{
            +id: number
+name: string
+description: string
+isActive: boolean
+createdAt: Date
+updatedAt: Date
            
        }
Model~TModelAttributes,TCreationAttributes~<|--RbacPermissionModel
class RbacRoleModel{
            +id: number
+name: string
+description: string
+isActive: boolean
+createdAt: Date
+updatedAt: Date
+rolesPermissions: RbacRolePermissionModel[]
            
        }
Model~TModelAttributes,TCreationAttributes~<|--RbacRoleModel
class RbacRolePermissionModel{
            +id: number
+roleId: number
+permissionId: number
+createdAt: Date
+updatedAt: Date
+permissions: RbacPermissionModel[]
            
        }
Model~TModelAttributes,TCreationAttributes~<|--RbacRolePermissionModel