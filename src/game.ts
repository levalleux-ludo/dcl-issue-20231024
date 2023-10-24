import * as ui from '@dcl/ui-scene-utils'
import * as crypto from '@dcl/crypto-scene-utils'
/// --- Spawner function ---

function spawnCube(x: number, y: number, z: number) {
  // create the entity
  const cube = new Entity()

  // add a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // add a shape to the entity
  cube.addComponent(new BoxShape())

  // add the entity to the engine
  engine.addEntity(cube)

  return cube
}

/// --- Spawn a cube ---

const cube = spawnCube(8, 1, 8)

async function userGreetings() {
  const inventory = await crypto.avatar.getUserInventory()
  return `Here is your belongings: ${inventory}`
}

cube.addComponent(
  new OnPointerDown(() => {
    ui.displayAnnouncement('...')
    void userGreetings().then((greetings: string) => {
      ui.displayAnnouncement(greetings)
    })
  })
)
