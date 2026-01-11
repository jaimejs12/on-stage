import { Clock, UserPlus, Music } from "lucide-react";
import { motion } from "motion/react";

interface Activity {
  id: string;
  type: "going" | "friend" | "new";
  user: string;
  userInitials: string;
  concert: string;
  venue: string;
  time: string;
}

export function ActivityScreen() {
  const activities: Activity[] = [
    {
      id: "1",
      type: "going",
      user: "María García",
      userInitials: "MG",
      concert: "The 1975",
      venue: "Palau Sant Jordi",
      time: "hace 2 horas",
    },
    {
      id: "2",
      type: "friend",
      user: "Carlos Ruiz",
      userInitials: "CR",
      concert: "Arctic Monkeys",
      venue: "WiZink Center",
      time: "hace 5 horas",
    },
    {
      id: "3",
      type: "new",
      user: "Ana López",
      userInitials: "AL",
      concert: "Bad Bunny",
      venue: "Palau Sant Jordi",
      time: "hace 8 horas",
    },
    {
      id: "4",
      type: "going",
      user: "Juan López",
      userInitials: "JL",
      concert: "Billie Eilish",
      venue: "Santiago Bernabéu",
      time: "hace 1 día",
    },
    {
      id: "5",
      type: "going",
      user: "Sara Martín",
      userInitials: "SM",
      concert: "Tame Impala",
      venue: "IFEMA",
      time: "hace 1 día",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "going":
        return <Music className="w-4 h-4" />;
      case "friend":
        return <UserPlus className="w-4 h-4" />;
      case "new":
        return <Clock className="w-4 h-4" />;
      default:
        return <Music className="w-4 h-4" />;
    }
  };

  const getActivityText = (activity: Activity) => {
    switch (activity.type) {
      case "going":
        return (
          <>
            <span className="text-foreground">{activity.user}</span>{" "}
            <span className="text-muted-foreground">va a ir a</span>{" "}
            <span className="text-foreground">{activity.concert}</span>
          </>
        );
      case "friend":
        return (
          <>
            <span className="text-foreground">{activity.user}</span>{" "}
            <span className="text-muted-foreground">
              también va a ir a
            </span>{" "}
            <span className="text-foreground">{activity.concert}</span>
          </>
        );
      case "new":
        return (
          <>
            <span className="text-foreground">{activity.user}</span>{" "}
            <span className="text-muted-foreground">añadió</span>{" "}
            <span className="text-foreground">{activity.concert}</span>
          </>
        );
      default:
        return null;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "going":
        return "bg-primary/20 text-primary";
      case "friend":
        return "bg-accent/20 text-accent";
      case "new":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="pb-24 pt-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-foreground mb-1">Actividad</h1>
        <p className="text-muted-foreground text-sm">
          Lo que están haciendo tus amigos
        </p>
      </div>

      {/* Activity Feed */}
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card rounded-xl p-4 border border-border hover:border-muted-foreground/30 transition-all"
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-sm text-foreground">
                {activity.userInitials}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm mb-1 leading-relaxed">
                  {getActivityText(activity)}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{activity.venue}</span>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>

              {/* Icon */}
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getIconColor(
                  activity.type
                )}`}
              >
                {getActivityIcon(activity.type)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State (commented out for demo) */}
      {/* {activities.length === 0 && (
        <div className="text-center py-20">
          <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-30" />
          <p className="text-foreground mb-2">No hay actividad reciente</p>
          <p className="text-muted-foreground text-sm">
            Cuando tus amigos marquen conciertos, aparecerán aquí
          </p>
        </div>
      )} */}
    </div>
  );
}