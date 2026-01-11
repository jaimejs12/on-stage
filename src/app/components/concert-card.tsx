import { Calendar, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface ConcertCardProps {
  artist: string;
  date: string;
  venue: string;
  city: string;
  image: string;
  isGoing?: boolean;
  friendsGoing?: number;
  daysUntil?: number;
  onToggleGoing?: () => void;
}

export function ConcertCard({
  artist,
  date,
  venue,
  city,
  image,
  isGoing = false,
  friendsGoing,
  daysUntil,
  onToggleGoing,
}: ConcertCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="bg-card rounded-xl overflow-hidden border border-border hover:border-muted-foreground/30 transition-all duration-200"
    >
      <div className="relative aspect-[4/3] bg-secondary">
        <ImageWithFallback
          src={image}
          alt={artist}
          className="w-full h-full object-cover"
        />
        {daysUntil !== undefined && daysUntil <= 7 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full"
          >
            en {daysUntil} día{daysUntil !== 1 ? 's' : ''}
          </motion.div>
        )}
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-foreground">{artist}</h3>
        <div className="space-y-1.5 mb-3">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>{venue} · {city}</span>
          </div>
          {friendsGoing && friendsGoing > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Users className="w-4 h-4" />
              <span>{friendsGoing} amigo{friendsGoing !== 1 ? 's' : ''} van</span>
            </div>
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onToggleGoing}
          className={`w-full py-2.5 rounded-lg transition-all duration-200 ${
            isGoing
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
          }`}
        >
          {isGoing ? "✓ Voy a ir" : "Marcar como 'Voy a ir'"}
        </motion.button>
      </div>
    </motion.div>
  );
}