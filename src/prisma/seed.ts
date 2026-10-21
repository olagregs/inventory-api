import { db } from "./db";

async function main() {
  console.log('Starting AssetTypes seed...');

  const initialAssetTypes = [
    { name: "Laptops" },
    { name: "Desktops" },
    { name: "Monitors" },
    { name: "Peripheral" },
    { name: "Servers" },
    { name: "Network Device" },
    { name: "Office Equipment" },
  ]

  for (const assetType of initialAssetTypes) {
    await db.orm.public.AssetTypes.upsert({
      create: { name: assetType.name },
      update: {},
      conflictOn: { name: assetType.name }
    });
  }

  console.log('AssetTypes seed completed successfully!');

  console.log('Starting AssetStatuses seed...');

  const initialAssetStatuses = [
    { name: "AVAILABLE" },
    { name: "ASSIGNED" },
    { name: "UNDER_REPAIR" },
    { name: "DISPOSED"},
  ]

  for (const assetStatuses of initialAssetStatuses ) {
    await db.orm.public.AssetStatuses.upsert({
      create: { name: assetStatuses.name },
      update: {},
      conflictOn: { name: assetStatuses.name }
    });
  }

  console.log('AssetStatuses seed completed successfully!');

  console.log('Starting AssetLocations seed...');

  const initialAssetLocations = [
      { name: 'Main Stockroom' },
      { name: 'IT Support Lab' },
      { name: 'Open Workspace - Floor 1' },
      { name: 'Open Workspace - Floor 2' },
      { name: 'Dev Zone - Floor 3' },
      { name: 'Conference Room Alpha' },
      { name: 'Main Reception' }
  ]

  for (const assetLocations of initialAssetLocations) {
    await db.orm.public.AssetLocations.upsert({
      create: { name: assetLocations.name },
      update: {},
      conflictOn: { name: assetLocations.name }
    });
  }

  console.log('AssetLocations seed completed successfully!');
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
}).finally(async () => {
  await db.close();
})
