#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/7cd22922e9e68ef645d60486993ed6399188d25f1dcf590da9725d0808a62bc3/contract';
import endContract from '../../snapshots/7cd22922e9e68ef645d60486993ed6399188d25f1dcf590da9725d0808a62bc3/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
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
          col('asset_status_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('asset_type_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('location', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('model', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('serial_number', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('tag', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updated_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'AssetLogs',
        columns: [
          col('action', 'text', {
            notNull: true,
            default: lit('CREATED'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('asset_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('asset_status_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('location', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('AssetLogs_action_check_22dd2474', `"action" IN ('CREATED', 'UPDATED')`),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'AssetStatuses',
        columns: [
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
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
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
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
        index: 'AssetLogs_asset_status_id_idx_c7183dcd',
        columns: ['asset_status_id'],
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
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
