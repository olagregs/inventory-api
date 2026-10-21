#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/485a4029469a7a348aea669961902e3590e4d8ce18b0c8a2160ea3ad33788f61/contract';
import endContract from '../../snapshots/485a4029469a7a348aea669961902e3590e4d8ce18b0c8a2160ea3ad33788f61/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  lit,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'Asset',
        columns: [
          col('asset_location_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('asset_status_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('asset_type_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('created_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('model', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('serial_number', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('tag', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updated_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'AssetLocations',
        columns: [
          col('created_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'AssetLogs',
        columns: [
          col('Action', 'text', {
            notNull: true,
            default: lit('CREATED'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('asset_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('asset_location_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('asset_status_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('created_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('AssetLogs_Action_check_40de97c8', `"Action" IN ('CREATED', 'UPDATED')`),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'AssetStatuses',
        columns: [
          col('created_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'AssetTypes',
        columns: [
          col('created_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'Asset',
        constraint: 'Asset_tag_key',
        columns: ['tag'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'Asset',
        constraint: 'Asset_serial_number_key',
        columns: ['serial_number'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'AssetLocations',
        constraint: 'AssetLocations_name_key',
        columns: ['name'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'AssetStatuses',
        constraint: 'AssetStatuses_name_key',
        columns: ['name'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'AssetTypes',
        constraint: 'AssetTypes_name_key',
        columns: ['name'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Asset',
        index: 'Asset_asset_location_id_idx_bd40cf12',
        columns: ['asset_location_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Asset',
        index: 'Asset_asset_status_id_idx_c7183dcd',
        columns: ['asset_status_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Asset',
        index: 'Asset_asset_type_id_idx_4c22a276',
        columns: ['asset_type_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'AssetLogs',
        index: 'AssetLogs_asset_id_idx_0cb19679',
        columns: ['asset_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'AssetLogs',
        index: 'AssetLogs_asset_location_id_idx_bd40cf12',
        columns: ['asset_location_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'AssetLogs',
        index: 'AssetLogs_asset_status_id_idx_c7183dcd',
        columns: ['asset_status_id'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Asset',
        foreignKey: {
          name: 'Asset_asset_location_id_fkey',
          columns: ['asset_location_id'],
          references: { schema: 'public', table: 'AssetLocations', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Asset',
        foreignKey: {
          name: 'Asset_asset_status_id_fkey',
          columns: ['asset_status_id'],
          references: { schema: 'public', table: 'AssetStatuses', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Asset',
        foreignKey: {
          name: 'Asset_asset_type_id_fkey',
          columns: ['asset_type_id'],
          references: { schema: 'public', table: 'AssetTypes', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'AssetLogs',
        foreignKey: {
          name: 'AssetLogs_asset_id_fkey',
          columns: ['asset_id'],
          references: { schema: 'public', table: 'Asset', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'AssetLogs',
        foreignKey: {
          name: 'AssetLogs_asset_status_id_fkey',
          columns: ['asset_status_id'],
          references: { schema: 'public', table: 'AssetStatuses', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'AssetLogs',
        foreignKey: {
          name: 'AssetLogs_asset_location_id_fkey',
          columns: ['asset_location_id'],
          references: { schema: 'public', table: 'AssetLocations', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
