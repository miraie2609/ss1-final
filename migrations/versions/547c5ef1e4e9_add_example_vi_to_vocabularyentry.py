"""Add example_vi to VocabularyEntry

Revision ID: 547c5ef1e4e9
Revises: c11e00098c3d
Create Date: 2025-06-08 21:14:05.767751

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '547c5ef1e4e9'
down_revision = 'c11e00098c3d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('is_blocked',
               existing_type=sa.BOOLEAN(),
               nullable=False)

    with op.batch_alter_table('vocabulary_list', schema=None) as batch_op:
        batch_op.add_column(sa.Column('example_vi', sa.Text(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('vocabulary_list', schema=None) as batch_op:
        batch_op.drop_column('example_vi')

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('is_blocked',
               existing_type=sa.BOOLEAN(),
               nullable=True)

    # ### end Alembic commands ###
