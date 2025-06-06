"""Add ipa column to VocabularyEntry

Revision ID: c11e00098c3d
Revises: 96ceea850914
Create Date: 2025-06-01 07:16:45.178811

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c11e00098c3d'
down_revision = '96ceea850914'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('vocabulary_entry', schema=None) as batch_op:
        batch_op.add_column(sa.Column('ipa', sa.String(length=100), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('vocabulary_entry', schema=None) as batch_op:
        batch_op.drop_column('ipa')

    # ### end Alembic commands ###
