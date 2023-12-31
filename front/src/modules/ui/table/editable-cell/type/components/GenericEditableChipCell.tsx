import {
  ViewFieldChipMetadata,
  ViewFieldDefinition,
} from '@/ui/editable-field/types/ViewField';
import { EditableCell } from '@/ui/table/editable-cell/components/EditableCell';

import { GenericEditableChipCellDisplayMode } from './GenericEditableChipCellDisplayMode';
import { GenericEditableChipCellEditMode } from './GenericEditableChipCellEditMode';

type OwnProps = {
  viewField: ViewFieldDefinition<ViewFieldChipMetadata>;
  editModeHorizontalAlign?: 'left' | 'right';
  placeholder?: string;
};

export function GenericEditableChipCell({
  viewField,
  editModeHorizontalAlign,
}: OwnProps) {
  return (
    <EditableCell
      editModeHorizontalAlign={editModeHorizontalAlign}
      editModeContent={
        <GenericEditableChipCellEditMode viewField={viewField} />
      }
      nonEditModeContent={
        <GenericEditableChipCellDisplayMode fieldDefinition={viewField} />
      }
    ></EditableCell>
  );
}
