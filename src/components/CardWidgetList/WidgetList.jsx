// components/WidgetList.jsx
import WidgetCard from './../Cardwidget/Cardwidget';

export default function WidgetList({ widgets }) {

  return (
    <div>
      {widgets.map(widget => (
        <WidgetCard key={widget.id} widget={widget} />
      ))}
    </div>
  );
}
